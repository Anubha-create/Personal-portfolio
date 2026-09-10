import React from 'react';

const iconMap = {
  'java': '/icons/tech/java.svg',
  'python': '/icons/tech/python.svg',
  'mysql': '/icons/tech/mysql.svg',
  'html5': '/icons/tech/html5.svg',
  'html': '/icons/tech/html5.svg',
  'css3': '/icons/tech/css3.svg',
  'css': '/icons/tech/css3.svg',
  'javascript': '/icons/tech/javascript.svg',
  'js': '/icons/tech/javascript.svg',
  'git': '/icons/tech/git.svg',
  'github': '/icons/tech/github.svg',
  'pandas': '/icons/tech/pandas.svg',
  'scikit-learn': '/icons/tech/scikitlearn.svg',
  'scikitlearn': '/icons/tech/scikitlearn.svg',
  'vscode': '/icons/tech/vscode.svg',
  'vs code': '/icons/tech/vscode.svg',
  'maven': '/icons/tech/maven.svg',
  'tomcat': '/icons/tech/tomcat.svg',
  'react': '/icons/tech/react.svg',
  'flask': '/icons/tech/flask.svg',
  'tailwind': '/icons/tech/tailwindcss.svg',
  'tailwindcss': '/icons/tech/tailwindcss.svg',
  'c': '/icons/tech/c.svg',
  'c++': '/icons/tech/cplusplus.svg',
  'cplusplus': '/icons/tech/cplusplus.svg',
  'postman': '/icons/tech/postman.svg'
};

export default function TechIcon({ name, className = "w-6 h-6", alt }) {
  const key = name ? name.toLowerCase().trim() : '';
  const src = iconMap[key];

  if (!src) {
    return <span className="font-mono text-xs font-bold text-slate-700">{name}</span>;
  }

  return (
    <img
      src={src}
      alt={alt || name}
      className={`${className} object-contain inline-block shrink-0 select-none`}
      loading="lazy"
    />
  );
}
