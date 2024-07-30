"use client";

const GoogleMap = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          className="gmap_iframe"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=17B Kusenla Road, Ikate Elegushi, Lekki Lagos. 106104&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://embed-googlemap.com">embed google map</a>
      </div>
      <style jsx>{`
        .mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          height: 100%;
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          width: 100%;
          height: 100%;
        }
        .gmap_iframe {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleMap;
