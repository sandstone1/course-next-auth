

// if we wanted a different title on this page, for example, then we would import in the
// Meta component and then pass in a title prop like the following:
// " title="Next File Upload | About" "
import Meta from '../components/meta/meta';
// import in our stylesheet
import styles from './about.module.scss';


const AboutPage = () => {

    return (

        <div className={ styles.aboutContainer }>

            <Meta title="About this app | About" />

            <h1>About</h1>
            <p>This is an app to learn and use Next Auth</p>
            <p>Version 1.0.0</p>

        </div>

    );

}


export default AboutPage;

