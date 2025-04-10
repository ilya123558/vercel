import './Loader.scss'

export const Loader = () => {
  return (
    <div className="loader">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="41" cy="6" r="6" fill="#5D3EC1"/>
        <circle opacity="0.9" cx="41" cy="74" r="6" fill="#5D3EC1"/>
        <circle cx="6" cy="41" r="6" fill="#5D3EC1"/>
        <circle cx="6" cy="41" r="6" fill="#5D3EC1"/>
        <circle cx="10.6222" cy="23.7499" r="6" transform="rotate(30 10.6222 23.7499)" fill="#5D3EC1"/>
        <circle cx="23.2501" cy="11.1219" r="6" transform="rotate(60 23.2501 11.1219)" fill="#5D3EC1"/>
        <circle opacity="0.6" cx="75" cy="41" r="5" fill="#5D3EC1"/>
        <circle opacity="0.7" cx="70.3777" cy="58.2499" r="5.21397" transform="rotate(30 70.3777 58.2499)" fill="#5D3EC1"/>
        <circle opacity="0.8" cx="57.7499" cy="70.8778" r="6" transform="rotate(60 57.7499 70.8778)" fill="#5D3EC1"/>
        <circle cx="23.2499" cy="70.8778" r="6" transform="rotate(120 23.2499 70.8778)" fill="#5D3EC1"/>
        <circle opacity="0.5" cx="70.3782" cy="23.7499" r="3.23255" transform="rotate(150 70.3782 23.7499)" fill="#5D3EC1"/>
        <circle cx="10.622" cy="58.2496" r="6" transform="rotate(150 10.622 58.2496)" fill="#5D3EC1"/>
      </svg>
    </div>
  );
};