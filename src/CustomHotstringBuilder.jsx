import { useState } from 'react';
import PropTypes from 'prop-types';

function CustomHotstringBuilder({ customHotstrings, onCustomHotstringsChange, isDarkMode = true }) {
  const [shortcut, setShortcut] = useState('');
  const [replacement, setReplacement] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (!shortcut.trim() || !replacement.trim()) {
      return;
    }

    if (editingIndex !== null) {
      // Update existing hotstring
      const updated = [...customHotstrings];
      updated[editingIndex] = { shortcut: shortcut.trim(), replacement: replacement.trim() };
      onCustomHotstringsChange(updated);
      setEditingIndex(null);
    } else {
      // Add new hotstring
      onCustomHotstringsChange([...customHotstrings, { 
        shortcut: shortcut.trim(), 
        replacement: replacement.trim() 
      }]);
    }

    setShortcut('');
    setReplacement('');
  };

  const handleEdit = (index) => {
    setShortcut(customHotstrings[index].shortcut);
    setReplacement(customHotstrings[index].replacement);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = customHotstrings.filter((_, i) => i !== index);
    onCustomHotstringsChange(updated);
    if (editingIndex === index) {
      setShortcut('');
      setReplacement('');
      setEditingIndex(null);
    }
  };

  const handleCancel = () => {
    setShortcut('');
    setReplacement('');
    setEditingIndex(null);
  };

  return (
    <div className={`border rounded-lg p-5 mt-5 ${
      isDarkMode 
        ? 'border-[#424242] bg-[rgba(255,255,255,0.08)]'
        : 'border-gray-300 bg-white shadow-sm'
    }`}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">✨</span>
        <h3 className={`font-bold text-lg ${isDarkMode ? 'text-[white]' : 'text-gray-900'}`}>
          Custom Shortcuts
        </h3>
      </div>

      {/* Input Section */}
      <div className={`mb-4 p-4 rounded-lg ${
        isDarkMode ? 'bg-[rgba(255,255,255,0.05)]' : 'bg-gray-50'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-[#aaa]' : 'text-gray-600'
            }`}>
              Shortcut Text
            </label>
            <input
              type="text"
              value={shortcut}
              onChange={(e) => setShortcut(e.target.value)}
              placeholder="e.g., sig, addr, phone"
              className={`w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 outline-none ${
                isDarkMode 
                  ? 'bg-[#474747] border border-[#696969] text-[#d1d1d1]'
                  : 'bg-white border border-gray-300 text-gray-900'
              }`}
            />
          </div>
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              isDarkMode ? 'text-[#aaa]' : 'text-gray-600'
            }`}>
              Replacement Text
            </label>
            <input
              type="text"
              value={replacement}
              onChange={(e) => setReplacement(e.target.value)}
              placeholder="e.g., Best regards, John"
              className={`w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 outline-none ${
                isDarkMode 
                  ? 'bg-[#474747] border border-[#696969] text-[#d1d1d1]'
                  : 'bg-white border border-gray-300 text-gray-900'
              }`}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleAdd}
            disabled={!shortcut.trim() || !replacement.trim()}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              !shortcut.trim() || !replacement.trim()
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : editingIndex !== null
                ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {editingIndex !== null ? '✏️ Update Shortcut' : '➕ Add Shortcut'}
          </button>
          
          {editingIndex !== null && (
            <button
              onClick={handleCancel}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-600 hover:bg-gray-700 text-white transition-all"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* List of Custom Hotstrings */}
      {customHotstrings.length > 0 ? (
        <div className="space-y-2">
          <p className={`text-sm mb-2 ${isDarkMode ? 'text-[#888]' : 'text-gray-600'}`}>
            Your Custom Shortcuts ({customHotstrings.length})
          </p>
          {customHotstrings.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                editingIndex === index
                  ? 'bg-yellow-900 bg-opacity-30 border border-yellow-600'
                  : isDarkMode 
                    ? 'bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.08)] border border-transparent'
                    : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-blue-400 text-sm">{item.shortcut}</span>
                  <span className={isDarkMode ? 'text-[#666]' : 'text-gray-400'}>→</span>
                  <span className={`text-sm ${isDarkMode ? 'text-[#d1d1d1]' : 'text-gray-700'}`}>
                    {item.replacement}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-3 py-1 text-xs rounded bg-blue-600 hover:bg-blue-700 text-white transition-all"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 text-xs rounded bg-red-600 hover:bg-red-700 text-white transition-all"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`text-center py-8 ${isDarkMode ? 'text-[#666]' : 'text-gray-400'}`}>
          <p className="text-3xl mb-2">📝</p>
          <p className="text-sm">No custom shortcuts yet. Add your first one above!</p>
        </div>
      )}

      <div className={`mt-4 p-3 border rounded-lg ${
        isDarkMode 
          ? 'bg-blue-900 bg-opacity-20 border-blue-800'
          : 'bg-blue-50 border-blue-200'
      }`}>
        <p className={`text-xs ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
          💡 <strong>Tip:</strong> Custom shortcuts will be added to your script with the pattern <code className={`px-1 rounded ${isDarkMode ? 'bg-blue-950' : 'bg-blue-100'}`}>::shortcut::</code>
        </p>
      </div>
    </div>
  );
}

CustomHotstringBuilder.propTypes = {
  customHotstrings: PropTypes.arrayOf(
    PropTypes.shape({
      shortcut: PropTypes.string.isRequired,
      replacement: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCustomHotstringsChange: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
};

export default CustomHotstringBuilder;
