import React from "react";

const Analytics = () => {
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
          <div className="report-title">Report 1</div>
          <div className="report-content">
            <a
              href="http://fish-n-chip.herokuapp.com/download/?file_type=report&fish_name=report-1"
              target={'_blank'}
              className="download-btn btn btn-dark"
            >
              Download
            </a>
          </div>
        </div>
        <div className="reports">
          <div className="report-title">Report 2</div>
          <div className="report-content">
            <a
              href={'http://fish-n-chip.herokuapp.com/download/?file_type=report&fish_name=report-2'}
              target={'_blank'}
              className="download-btn btn btn-dark"
            >
              Download
            </a>
          </div>
        </div>
      </div>
      <div className="reports-download-row">
        <div className="reports">
          <div className="report-title">Report 3</div>
          <div className="report-content">
            <a
            target={"_blank"}
              href={'http://fish-n-chip.herokuapp.com/download/?file_type=report&fish_name=report-3'}
              className="download-btn btn btn-dark"
            >
              Download
            </a>
          </div>
        </div>
        <div className="reports">
          <div className="report-title">Report 4</div>
          <div className="report-content">
            <a
              href={"http://fish-n-chip.herokuapp.com/download/?file_type=report&fish_name=report-4"}
              className="download-btn btn btn-dark"
              target={'_blank'}
            >
              Download
            </a>
          </div>
        </div>
      </div>
      <div className="reports-download-row">
        <div className="reports">
          <div className="report-title">Report 5</div>
          <div className="report-content">
            <a
            target={'_blank'}
             href={'http://fish-n-chip.herokuapp.com/download/?file_type=report&fish_name=report-5'}
              className="download-btn btn btn-dark"
            >
              Download
            </a>
          </div>
        </div>
        <div className="reports">
          <div className="report-title">Report 6</div>
          <div className="report-content">
            <a
            target={"_blank"}
              href={"http://fish-n-chip.herokuapp.com/download/?file_type=report&fish_name=report-6"}
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

export default Analytics;
