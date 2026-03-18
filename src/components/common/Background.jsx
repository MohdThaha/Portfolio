import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#0a0f16]">
      <div 
        className="glow-blob bg-blue-600/30 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] top-[-10vw] left-[-10vw]" 
        style={{animationDelay: '0s'}}
      ></div>
      <div 
        className="glow-blob bg-indigo-600/20 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bottom-[-20vw] right-[-10vw]" 
        style={{animationDelay: '2s'}}
      ></div>
      <div 
        className="glow-blob bg-purple-600/20 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] top-[40%] left-[60%]" 
        style={{animationDelay: '4s'}}
      ></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
    </div>
  );
};

export default Background;
