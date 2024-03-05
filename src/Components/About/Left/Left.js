import React from 'react'
import './Left.css'

function Left() {
    return (
        <div>
            <>
                <div className="left_header">Operating systems</div><br />
                <p className='left_p_tag' >prefer to use unix operating systems</p>
                <div className="left_content">
                    <ul>
                        <li><strong>ubuntu</strong></li>
                        <li>windows</li>
                        <li>fedora</li>
                    </ul>
                </div>
            </>
            <>
                <div className="left_header">Database management</div><br />
                <p className='left_p_tag' >sql, and serverless experience </p>
                <div className="left_content">
                    <ul>
                        <li><strong>PostgreSQL/PostGIS</strong></li>
                        <li>Amazon RDS</li>
                        <li>Oracle</li>
                    </ul>
                </div>
            </>
            <>
                <div className="left_header">Spatial</div><br />
                <p className='left_p_tag' >GIS systems: </p>
                <div className="left_content">
                    <ul>
                        <li><strong>GDAL</strong></li>
                        <li>QGIS</li>
                        <li>ArcGIS</li>
                        <li>GeoMedia</li>
                    </ul>
                </div>
            </>
            <>
                <div className="left_header">Frontend</div><br />
                <p className='left_p_tag' >sql, and serverless experience </p>
                <div className="left_content">
                    <ul>
                        <li><strong>ReactJS</strong></li>
                        <li>MUI</li>
                        <li>OpenLa</li>
                    </ul>
                </div>
            </>
        </div>
    )
}

export default Left