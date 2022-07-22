import Layout from "../hooks/Layout";
import { connect } from 'react-redux'


const Home = () => {

    return (
        <Layout>
            {/* Control Sidebar */}
            <div className="content-wrapper">
                <h1>Holaaa</h1>
            </div>
        </Layout>

    )
};

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Home)