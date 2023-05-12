function showPopup() {
  var popup = document.createElement("div");
  popup.setAttribute("id", "popup");

  var popupContent = document.createElement("div");
  popupContent.setAttribute("id", "popup-content");

  var closeButton = document.createElement("span");
  closeButton.setAttribute("id", "close-button");
  closeButton.setAttribute("onclick", "closePopup()");
  closeButton.innerHTML = "&times;";

  var bioContent = document.createElement("div");
  bioContent.setAttribute("id", "bio-content");
  bioContent.innerHTML =
    "<h1>Curriculum Vitae</h1><ul><hr><li>Name : Muhammad Rizki A</li><li>Addr : JL.Anggrek IV, Petukangan Utara, Jakarta</li> </ul><p>EDUCATION BACKGROUND</p><ul><li>Bandung Of Institute Techology (2012 – 2013) GPA 3.87 Bachelor of Applied Science of DKV.</li><li>Telkom University (2008 – 2011) GPA 3.13 Diploma degree of computer engineering.</li><li>Senior High School 79 Jakarta ( 2005 - 2008)</li></ul> <p>WORK EXPERIENCE</p><ul><p><li>PT. Mora Telematika Indonesia (Maret 2017 – Now).</li></p><ul>Tim Leader IP Core Support Palapa Ring Barat (PRB) <li>Support team Tier 1 PRB, based on maintenance device to prevent network problems, and improve the device quality.</li><li>Check the alarm for device problems in the monitor system, make a backup device database for the unmonitored device and report all of the NE data that collected.</li><li>Make Method of Procedure (MOP) to improve and upgrade the device, report the summary of vendor trouble ticket, internal MOP, and MPLS capacity, internal and external reports of vendor trouble ticket comparisons.</li><li>Arrange meeting with the vendor quarterly and make a renewal contract proposal for to vendor.</li><li>Coordinate Meeting Discusion SLA with IT Divison and Bakti Kominfo. </li><li>Organize sharing session with the vendor</li></ul><p><li>PT. Infomedia Solusi Humanika by Telekomunikasi Indonesia Tbk (May 2014 – 2017). </li></p><ul>Network Operation Centre (NOC) at Telkom STO Gambir Jakarta Pusat.  <li>Handle daily troubleshoot from all Telkom customer  and tracing topology from Telkom router to customer device. Routing internet protocol, change adsl profile in DSLAM/MSAN/GPON, traceroute from Telkom device until customer device.</li><li>Update Trouble Ticketing </li><li>Coordination with Regional Field to Trouble Solve Link Problem</li><li>Handover with team if change Time to Work</li></ul><p><li>PT. Abhimata Persada ( Banking Provider) (May 2011 – July 2012).</li> </p> <ul>IT External Support Staff of Banking Provider <li> Monitoring Banking system On site (Currenty at Bank BNI).</li><li> Maintenance Data Center and Disaster Recovery Center as Periodic Time </li><li>Handle and maintenance application as services at Data Center and DRC at Bank Negara Indonesia (BNI)</li><li>support another team if on leave at another Place</li";

  popupContent.appendChild(closeButton);
  popupContent.appendChild(bioContent);

  popup.appendChild(popupContent);
  document.body.appendChild(popup);
}

function closePopup() {
  var popup = document.getElementById("popup");
  document.body.removeChild(popup);
}
