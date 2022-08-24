import React from "react";
import WhiteMarlin from "../assets/white-marlin.jpg";
import PacificHaliput from "../assets/pacific-haliput.png";
import RedGroper from "../assets/red-groper.jpg";
import YellowFin from "../assets/yellowfin-tuna.png";

const DownloadReports = () => {
  const download = (url, name) => {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", name);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
    });
  };

  return (
    <div className="reports-download-col">
      <div className="reports-download-row">
        <div className="reports">
          <div className="report-title">White Marlin</div>
          <div className="report-content">
            <img src={WhiteMarlin} className="fish-img" />
            <a
            target={"_blank"}
              href={"http://fish-n-chip.herokuapp.com/download/?file_type=report&fish_name=white-marlin"}
              className="download-btn btn btn-dark"
            >
              Download
            </a>
          </div>
        </div>
        <div className="reports">
          <div className="report-title">Pacific Halibut</div>
          <div className="report-content">
            <img src={PacificHaliput} className="fish-img" />
            <a
            target={'_blank'}
             href={"http://fish-n-chip.herokuapp.com/download/?file_type=report&fish_name=pacific-halibut"}
              className="download-btn btn btn-dark"
            >
              Download
            </a>
          </div>
        </div>
      </div>
      <div className="reports-download-row">
        <div className="reports">
          <div className="report-title">Red Grouper</div>
          <div className="report-content">
            <img src={RedGroper} className="fish-img" />
            <a
            target={"_blank"}
              href={"http://fish-n-chip.herokuapp.com/download/?file_type=report&fish_name=red-grouper"}
              className="download-btn btn btn-dark"
            >
              Download
            </a>
          </div>
        </div>
        <div className="reports">
          <div className="report-title">Yellowfin Tuna</div>
          <div className="report-content">
            <img src={YellowFin} className="fish-img" />
            <a
            target={'_blank'}
              href={'http://fish-n-chip.herokuapp.com/download/?file_type=report&fish_name=yellowfin-tuna'}
              className="download-btn btn btn-dark"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadReports;
