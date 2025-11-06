import { useState } from 'react';
import PropTypes from 'prop-types';

function LivePreview({ name, address, email, degree, phonenumber, customHotstrings = [], isDarkMode = true }) {
  const [copied, setCopied] = useState(false);

  const generatePreviewScript = () => {
    // Generate custom hotstrings section
    const customHotstringsScript = customHotstrings.length > 0
      ? '\n; Custom Hotstrings\n' + customHotstrings.map(item => 
          `:*:${item.shortcut}::
    Send, ${item.replacement}
    return`
        ).join('\n\n')
      : '';

    return `#SingleInstance Force
SetWorkingDir, %A_ScriptDir%

; Initialize replacement texts
replacementText_name := "${name || '[Your Name]'}"
replacementText_address := "${address || '[Your Address]'}"
replacementText_email := "${email || '[Your Email]'}"
replacement_degree := "${degree || '[Your Degree]'}"
replacement_phonenumber := "${phonenumber || '[Your Phone]'}"

; Define hotstrings for days of the week and months
::mon::Monday
::tue::Tuesday
::wed::Wednesday
::thu::Thursday
::fri::Friday
::sat::Saturday
::sun::Sunday
::jan::January
::feb::February
::mar::March
::apr::April
::may::May
::jun::June
::jul::July
::aug::August
::sep::September
::oct::October
::nov::November
::dec::December

; Define hotstrings for replacement texts
:*:name;:: 
    Send, %replacementText_name%
    return

:*:add;:: 
    Send, %replacementText_address%
    return

:*:email;:: 
    Send, %replacementText_email%
    return

:*:degree;:: 
    Send, %replacement_degree%
    return

:*:num;:: 
    Send, %replacement_phonenumber%
    return${customHotstringsScript}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatePreviewScript());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={`border rounded-lg p-5 mt-10 ${
      isDarkMode 
        ? 'border-[#424242] bg-[rgba(255,255,255,0.08)]'
        : 'border-gray-300 bg-white shadow-sm'
    }`}>
      <div className="flex justify-between items-center mb-3">
        <h3 className={`font-bold text-lg ${isDarkMode ? 'text-[white]' : 'text-gray-900'}`}>
          📋 Live Preview
        </h3>
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            copied
              ? 'bg-green-600 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {copied ? '✓ Copied!' : '📋 Copy Script'}
        </button>
      </div>
      <div className={`rounded-lg p-4 overflow-auto max-h-[400px] ${
        isDarkMode ? 'bg-[#1e1e1e]' : 'bg-gray-50'
      }`}>
        <pre className={`text-xs font-mono leading-relaxed ${
          isDarkMode ? 'text-[#d4d4d4]' : 'text-gray-800'
        }`}>
          {generatePreviewScript()}
        </pre>
      </div>
      <div className="mt-3 text-xs text-[#888]">
        <p className={isDarkMode ? 'text-[#888]' : 'text-gray-500'}>
          💡 Tip: Fill in all fields to see your personalized script
        </p>
      </div>
    </div>
  );
}

LivePreview.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  degree: PropTypes.string,
  phonenumber: PropTypes.string,
  customHotstrings: PropTypes.arrayOf(
    PropTypes.shape({
      shortcut: PropTypes.string.isRequired,
      replacement: PropTypes.string.isRequired,
    })
  ),
  isDarkMode: PropTypes.bool,
};

export default LivePreview;
