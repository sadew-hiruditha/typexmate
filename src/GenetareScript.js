export const generateScript = (name, address, email, uniname, phonenumber) => {
  const ahkScript = `
  #SingleInstance Force
  SetWorkingDir, %A_ScriptDir%
  
  ; Initialize replacement texts
  replacementText_name := "${name}"
  replacementText_address := "${address}"
  replacementText_email := "${email}"
  replacement_uniName := "${uniname}"
  replacement_phonenumber := "${phonenumber}"
  
  :*:name;:: 
      Send, %replacementText_name%
      return
  
  :*:address;:: 
      Send, %replacementText_address%
      return
  
  :*:email;:: 
      Send, %replacementText_email%
      return
  
  :*:uniname;:: 
      Send, %replacement_uniName%
      return
  
  :*:phonenumber;:: 
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