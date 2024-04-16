export const generateScript = (name, address, email, degree, phonenumber) => {
    const ahkScript = `
    #SingleInstance Force
    SetWorkingDir, %A_ScriptDir%
    
    ; Initialize replacement texts
    replacementText_name := "${name}"
    replacementText_address := "${address}"
    replacementText_email := "${email}"
    replacement_degree := "${degree}"
    replacement_phonenumber := "${phonenumber}"
    
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
        return
    `;
  
    // Create a Blob and initiate download
    const blob = new Blob([ahkScript], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AutoHotKeyScript.ahk";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  