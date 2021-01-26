import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../utils/ColorContext';
import './styles.scss'

const Footer = () => {
    const [color, setColor] = useContext(Context);

    return (
        <div className="footerContainer">
            <div className="spiralWrapper">
                <div className="spiralCover"></div>
                <svg width="2000" height="2000" viewBox="0 0 1953.603 1953.603" className="spiralSvg spiralUpperSvg" style={{ stroke: color.code }}>
                    <path d="M834,852S816,366,1192,43" transform="translate(-23.199 -23.199)"></path>
                    <path d="M810.822,883.074S708.7,407.583,1022.9,24.2" transform="translate(-23.199 -23.199)"></path>
                    <path d="M793.392,917.7S610.256,467.167,853.108,35.046" transform="translate(-23.199 -23.199)"></path>
                    <path d="M782.24,954.828S523.651,542.94,687.777,75.214" transform="translate(-23.199 -23.199)"></path>
                    <path d="M777.7,993.328S451.52,632.6,531.933,143.48" transform="translate(-23.199 -23.199)"></path>
                    <path d="M779.923,1032.031S396.055,733.425,390.311,237.772" transform="translate(-23.199 -23.199)"></path>
                    <path d="M788.828,1069.76S358.94,842.349,267.214,355.223" transform="translate(-23.199 -23.199)"></path>
                    <path d="M804.15,1105.37S341.3,956.063,166.382,492.266" transform="translate(-23.199 -23.199)"></path>
                    <path d="M825.423,1137.778S343.681,1071.112,90.879,644.736" transform="translate(-23.199 -23.199)"></path>
                    <path d="M852,1166S366,1184,43,808" transform="translate(-23.199 -23.199)"></path>
                    <path d="M883.074,1189.178S407.583,1291.3,24.2,977.1" transform="translate(-23.199 -23.199)"></path>
                    <path d="M917.7,1206.608s-450.534,183.136-882.655-59.716" transform="translate(-23.199 -23.199)"></path>
                    <path d="M954.828,1217.76S542.94,1476.349,75.214,1312.223" transform="translate(-23.199 -23.199)"></path>
                    <path d="M993.328,1222.3S632.6,1548.48,143.48,1468.067" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1032.031,1220.077s-298.606,383.868-794.259,389.612" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1069.76,1211.172S842.349,1641.06,355.223,1732.786" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1105.37,1195.85s-149.307,462.847-613.1,637.768" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1137.778,1174.577s-66.666,481.742-493.042,734.544" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1166,1148s18,486-358,809" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1189.178,1116.926S1291.3,1592.417,977.1,1975.8" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1206.608,1082.3s183.136,450.534-59.716,882.655" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1217.76,1045.172s258.589,411.888,94.463,879.614" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1222.3,1006.672S1548.48,1367.4,1468.067,1856.52" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1220.077,967.969s383.868,298.606,389.612,794.259" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1211.172,930.24s429.888,227.411,521.614,714.537" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1195.85,894.63s462.847,149.307,637.768,613.1" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1174.577,862.222s481.742,66.666,734.544,493.042" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1148,834s486-18,809,358" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1116.926,810.822S1592.417,708.7,1975.8,1022.9" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1082.3,793.392s450.534-183.136,882.655,59.716" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1045.172,782.24s411.888-258.589,879.614-94.463" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1006.672,777.7S1367.4,451.52,1856.52,531.933" transform="translate(-23.199 -23.199)"></path>
                    <path d="M967.969,779.923s298.606-383.868,794.259-389.612" transform="translate(-23.199 -23.199)"></path>
                    <path d="M930.24,788.828s227.411-429.888,714.537-521.614" transform="translate(-23.199 -23.199)"></path>
                    <path d="M894.63,804.15s149.307-462.847,613.1-637.768" transform="translate(-23.199 -23.199)"></path>
                    <path d="M862.222,825.423s66.666-481.742,493.042-734.544" transform="translate(-23.199 -23.199)"></path>
                </svg>
                <svg width="2000" height="2000" viewBox="0 0 1953.603 1953.603" className="spiralSvg spiralLowerSvg" style={{ stroke: color.code }}>
                    <path d="M834,852S816,366,1192,43" transform="translate(-23.199 -23.199)"></path>
                    <path d="M810.822,883.074S708.7,407.583,1022.9,24.2" transform="translate(-23.199 -23.199)"></path>
                    <path d="M793.392,917.7S610.256,467.167,853.108,35.046" transform="translate(-23.199 -23.199)"></path>
                    <path d="M782.24,954.828S523.651,542.94,687.777,75.214" transform="translate(-23.199 -23.199)"></path>
                    <path d="M777.7,993.328S451.52,632.6,531.933,143.48" transform="translate(-23.199 -23.199)"></path>
                    <path d="M779.923,1032.031S396.055,733.425,390.311,237.772" transform="translate(-23.199 -23.199)"></path>
                    <path d="M788.828,1069.76S358.94,842.349,267.214,355.223" transform="translate(-23.199 -23.199)"></path>
                    <path d="M804.15,1105.37S341.3,956.063,166.382,492.266" transform="translate(-23.199 -23.199)"></path>
                    <path d="M825.423,1137.778S343.681,1071.112,90.879,644.736" transform="translate(-23.199 -23.199)"></path>
                    <path d="M852,1166S366,1184,43,808" transform="translate(-23.199 -23.199)"></path>
                    <path d="M883.074,1189.178S407.583,1291.3,24.2,977.1" transform="translate(-23.199 -23.199)"></path>
                    <path d="M917.7,1206.608s-450.534,183.136-882.655-59.716" transform="translate(-23.199 -23.199)"></path>
                    <path d="M954.828,1217.76S542.94,1476.349,75.214,1312.223" transform="translate(-23.199 -23.199)"></path>
                    <path d="M993.328,1222.3S632.6,1548.48,143.48,1468.067" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1032.031,1220.077s-298.606,383.868-794.259,389.612" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1069.76,1211.172S842.349,1641.06,355.223,1732.786" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1105.37,1195.85s-149.307,462.847-613.1,637.768" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1137.778,1174.577s-66.666,481.742-493.042,734.544" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1166,1148s18,486-358,809" transform="translate(-23.199 -23.199)"></path
                    ><path d="M1189.178,1116.926S1291.3,1592.417,977.1,1975.8" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1206.608,1082.3s183.136,450.534-59.716,882.655" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1217.76,1045.172s258.589,411.888,94.463,879.614" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1222.3,1006.672S1548.48,1367.4,1468.067,1856.52" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1220.077,967.969s383.868,298.606,389.612,794.259" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1211.172,930.24s429.888,227.411,521.614,714.537" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1195.85,894.63s462.847,149.307,637.768,613.1" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1174.577,862.222s481.742,66.666,734.544,493.042" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1148,834s486-18,809,358" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1116.926,810.822S1592.417,708.7,1975.8,1022.9" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1082.3,793.392s450.534-183.136,882.655,59.716" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1045.172,782.24s411.888-258.589,879.614-94.463" transform="translate(-23.199 -23.199)"></path>
                    <path d="M1006.672,777.7S1367.4,451.52,1856.52,531.933" transform="translate(-23.199 -23.199)"></path>
                    <path d="M967.969,779.923s298.606-383.868,794.259-389.612" transform="translate(-23.199 -23.199)"></path>
                    <path d="M930.24,788.828s227.411-429.888,714.537-521.614" transform="translate(-23.199 -23.199)"></path>
                    <path d="M894.63,804.15s149.307-462.847,613.1-637.768" transform="translate(-23.199 -23.199)"></path>
                    <path d="M862.222,825.423s66.666-481.742,493.042-734.544" transform="translate(-23.199 -23.199)"></path>
                </svg>
            </div>
            <div className="footerStamp">
                <div>
                    <h2 className="footerLogo">a</h2>
                    <h3 className="footerTagline">where ideas grow</h3>
                    <p className="footerSubtag">Branding, Mobile, Web, UI-UX</p>
                </div>
            </div>
            <div className="footerCopyright">
                <h2>a</h2>
                <p>&copy;2021 AdroitHub</p>
            </div>
            <div className="terms-conditions">
                <Link to="/terms/">
                    Terms
                </Link>
                <Link to="/privacy-policy/">
                    Privacy Policy
                </Link>
                <a href="mailto:info@adroithub.com">Contact</a>
            </div>
        </div>
    )
}

export default Footer
