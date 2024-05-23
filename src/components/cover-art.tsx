import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Rellax from 'rellax';

interface CoverArtProps {
  align: string;
  cover: string;
  spotify: string;
  applemusic: string;
  className: string;
  youtube: string;
  layout?: string;
  label?: string
}

const CoverArt: React.FC<CoverArtProps> = ({
  align,
  cover,
  spotify,
  applemusic,
  youtube,
  className,
  layout,
  label
}) => {
  const imgRef = useRef<HTMLDivElement>(null);
  const imgRellax = useRef<any>(null);

  const handleScroll = () => {
    if(imgRef.current) {
      const blur = (imgRef.current.getBoundingClientRect().top - (imgRef.current.offsetHeight / 2)) / 50;
      imgRef.current.style.filter = `blur(${blur}px)`;
    }
  };

  useEffect(() => {
    if(imgRef.current) {
      imgRellax.current = new Rellax(imgRef.current, { speed: layout == 'compact' ? 5 : 2 });
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      imgRellax.current?.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [layout]);

  return (
    <div ref={imgRef} className={`${className} gx-5 mb-5 ${layout != 'compact' ? 'row col-md-12' : ''} ${layout == 'compact' ? 'd-flex flex-column align-items-center col-md-3' : ''}`}>
      <div className={`${align == 'right' && layout != 'compact' ? 'order-1' : ''} ${layout != 'compact' ? 'col-md-6' : ''}`}>
        <Image alt={label || ''} className="mw-100 h-auto" src={cover} width={1000} height={1000} />
      </div>
      <div className={`d-flex flex-column align-items-center justify-content-center ${layout != 'compact' ? 'col-md-6' : ''}`}>
        <div>
          <div className={`text-white fw-bolder text-uppercase ${layout != 'compact' ? 'display-1' : ''}`}>
            Listen now
          </div>
          <div className="d-flex justify-content-start gap-4 w-100">
            {spotify && (
              <a href={spotify} target="_blank" className="btn btn-media spotify d-flex align-items-center gap-2 text-uppercase lead fw-bold">
                <svg width="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 0C10.7455 0 0 10.7444 0 24C0 37.2556 10.7455 48 24 48C37.2545 48 48 37.2556 48 24C48 10.7444 37.2545 0 24 0ZM35.7091 34.5975C35.3236 35.28 34.6146 35.664 33.8837 35.664C33.5418 35.664 33.1891 35.5785 32.8655 35.3985C29.8691 33.7185 26.6037 32.6895 23.1527 32.34C19.6946 31.9935 16.28 32.3444 13 33.3916C11.9055 33.7411 10.7273 33.1364 10.3782 32.04C10.0255 30.9418 10.6327 29.7676 11.7309 29.4164C15.5564 28.1942 19.5454 27.7785 23.5745 28.188C27.5963 28.5975 31.4073 29.7975 34.9055 31.7582C35.9127 32.3189 36.2727 33.5909 35.7091 34.5975ZM38.5818 27.3076C38.2109 28.0215 37.4836 28.4309 36.7309 28.4309C36.4036 28.4309 36.0764 28.356 35.7673 28.1942C32.0836 26.2756 28.1054 25.0876 23.9345 24.6644C19.7309 24.2342 15.5673 24.6091 11.5527 25.7669C10.4436 26.0818 9.28729 25.4476 8.97093 24.3389C8.65093 23.232 9.2909 22.0756 10.3964 21.756C14.9273 20.4495 19.6254 20.0309 24.3564 20.5109C29.0545 20.9895 33.5418 22.3276 37.6982 24.4935C38.7164 25.0262 39.1164 26.2858 38.5818 27.3076ZM39.6218 21.2429C39.3091 21.2429 38.9927 21.1724 38.6909 21.024C34.32 18.8444 29.6182 17.4869 24.7127 16.9891C19.8 16.4865 14.9127 16.8749 10.1818 18.1382C9.06909 18.4335 7.92727 17.7735 7.62908 16.6589C7.3309 15.5458 7.99275 14.4015 9.10911 14.1044C14.3273 12.7109 19.7236 12.2865 25.1382 12.8371C30.5455 13.3844 35.7309 14.8829 40.5527 17.2876C41.5855 17.8018 42.0036 19.056 41.4909 20.0865C41.1273 20.82 40.3891 21.2429 39.6218 21.2429Z" fill="white"/></svg>
                  {layout != 'compact' ? 'Spotify' : ''}
              </a>
            )}
            {applemusic && (
              <a href={applemusic} target="_blank" className="btn btn-media applemusic d-flex align-items-center gap-2 text-uppercase lead fw-bold">
                <svg className="mt-n1" width="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_17_88)"><path d="M43.5839 37.4071C42.858 39.0841 41.9988 40.6278 41.0033 42.047C39.6463 43.9817 38.5352 45.321 37.6789 46.0647C36.3516 47.2854 34.9294 47.9105 33.4065 47.9461C32.3132 47.9461 30.9947 47.635 29.4599 47.0039C27.9201 46.3758 26.5051 46.0647 25.2112 46.0647C23.8542 46.0647 22.3988 46.3758 20.8421 47.0039C19.2831 47.635 18.0271 47.9639 17.0668 47.9964C15.6064 48.0587 14.1508 47.4157 12.6978 46.0647C11.7704 45.2558 10.6105 43.8692 9.22087 41.9048C7.72995 39.8071 6.50422 37.3745 5.54395 34.6013C4.51554 31.6058 4 28.7052 4 25.897C4 22.6802 4.69509 19.9057 6.08734 17.5808C7.18153 15.7133 8.63718 14.2401 10.4591 13.1587C12.2809 12.0772 14.2495 11.5261 16.3694 11.4909C17.5293 11.4909 19.0505 11.8497 20.9408 12.5548C22.8258 13.2624 24.0361 13.6212 24.5667 13.6212C24.9635 13.6212 26.308 13.2016 28.5874 12.3652C30.7428 11.5895 32.562 11.2684 34.0524 11.3949C38.0908 11.7208 41.1247 13.3127 43.1425 16.1808C39.5307 18.3692 37.7441 21.4343 37.7797 25.3663C37.8123 28.429 38.9233 30.9777 41.107 33.0013C42.0966 33.9406 43.2017 34.6665 44.4313 35.182C44.1646 35.9553 43.8832 36.696 43.5839 37.4071ZM34.322 0.960823C34.322 3.36137 33.445 5.60276 31.6969 7.67736C29.5873 10.1437 27.0357 11.5688 24.2687 11.3439C24.2334 11.0559 24.213 10.7528 24.213 10.4343C24.213 8.12979 25.2162 5.6635 26.9978 3.64696C27.8872 2.62596 29.0185 1.77701 30.3903 1.09978C31.7591 0.43266 33.0539 0.0637274 34.2716 0.000549316C34.3072 0.321465 34.322 0.642401 34.322 0.960792V0.960823Z" fill="white"/></g><defs><clipPath id="clip0_17_88"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>
                  {layout != 'compact' ? 'Apple' : ''}
              </a>
            )}
            {youtube && (
              <a href={youtube} target="_blank" className="btn btn-media youtube d-flex align-items-center gap-2 text-uppercase lead fw-bold">
                <svg width="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M47.5219 14.4001C47.5219 14.4001 47.0531 11.0907 45.6094 9.6376C43.7812 7.7251 41.7375 7.71572 40.8 7.60322C34.0875 7.11572 24.0094 7.11572 24.0094 7.11572H23.9906C23.9906 7.11572 13.9125 7.11572 7.2 7.60322C6.2625 7.71572 4.21875 7.7251 2.39062 9.6376C0.946875 11.0907 0.4875 14.4001 0.4875 14.4001C0.4875 14.4001 0 18.2907 0 22.172V25.8095C0 29.6907 0.478125 33.5813 0.478125 33.5813C0.478125 33.5813 0.946875 36.8907 2.38125 38.3438C4.20937 40.2563 6.60938 40.1907 7.67813 40.397C11.5219 40.7626 24 40.8751 24 40.8751C24 40.8751 34.0875 40.8563 40.8 40.3782C41.7375 40.2657 43.7812 40.2563 45.6094 38.3438C47.0531 36.8907 47.5219 33.5813 47.5219 33.5813C47.5219 33.5813 48 29.7001 48 25.8095V22.172C48 18.2907 47.5219 14.4001 47.5219 14.4001ZM19.0406 30.2251V16.7345L32.0062 23.5032L19.0406 30.2251Z" fill="white"/></svg>
                  {layout != 'compact' ? 'YouTube' : ''}
              </a>
            )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default CoverArt;