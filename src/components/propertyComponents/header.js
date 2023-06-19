import pagetitle from '../../assets/img/page-title.jpg'
import { Link } from 'react-router-dom'

const PropertyHeader = ({ forType }) => {

    return (
        <section className="py-[120px] page-title page-title-background">
            <div style={{
                backgroundImage: `url(${pagetitle})`,
            }} className="bg-[50%_-15.8828px] page-title-background page-title-parallax" data-stellar-background-ratio="0.5"></div>
            <div className="vc_row-background-overlay bg-[rgba(0,0,0,0.68)]"></div>
            <div className="container">
                <div className="page-title-inner">
                    <div className="page-title-main-info">
                        <h1>List Properties</h1>

                    </div>


                    <ul className="breadcrumbs">
                        <li><Link to="/" className="home">Home</Link></li><li><span className="capitalize">For {forType}</span></li>  </ul>
                </div>
            </div>
        </section>
    )

}

export default PropertyHeader