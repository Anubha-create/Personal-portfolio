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
  'numpy': '/icons/tech/numpy.svg',
  'matplotlib': '/icons/tech/matplotlib.svg',
  'seaborn': '/icons/tech/seaborn.svg',
  'xgboost': '/icons/tech/xgboost.svg',
  'power bi': '/icons/tech/powerbi.svg',
  'powerbi': '/icons/tech/powerbi.svg',
  'ibm cognos': '/icons/tech/cognos.svg',
  'cognos': '/icons/tech/cognos.svg',
  'sql': '/icons/tech/sql.svg',
  'nltk': '/icons/tech/nltk.svg',
  'eda': '/icons/tech/analytics.svg',
  'exploratory data analysis (eda)': '/icons/tech/analytics.svg',
  'exploratory data analysis': '/icons/tech/analytics.svg',
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
  const rawPath = iconMap[key];

  if (!rawPath) {
    return (
      <span className="w-full h-full rounded bg-slate-200 text-slate-700 font-mono text-[10px] font-bold flex items-center justify-center select-none shrink-0">
        {name ? name.charAt(0).toUpperCase() : '•'}
      </span>
    );
  }

  const cleanPath = rawPath.startsWith('/') ? rawPath.slice(1) : rawPath;
  const src = `${import.meta.env.BASE_URL}${cleanPath}`;

  return (
    <img
      src={src}
      alt={alt || name}
      className={`${className} object-contain inline-block shrink-0 select-none`}
      loading="lazy"
    />
  );
}
