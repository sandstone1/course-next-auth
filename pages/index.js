

// import in the scss file
import styles from './index-hero-1.module.scss';


export default function HomePage() {

    return (

        <div className={ styles.homePageContainer }>

            <div className={ styles.homePageContainerImageContainer }>

                    <h2 className={ styles.homePageContainerImageContainerH2 }>Home Page for Next Auth</h2>

            </div>

            <style jsx global>
                {`
                    // remember "We (i.e. next.js) bundle styled-jsx to provide support for isolated scoped CSS."
                    body > div > div > header > nav {

                        z-index : 1; // lay the header nav elements on top of the hero image element

                    }
                    body > div > div > footer {

                        z-index : 0; // we did not have to change the z-index for the footer since the
                        // footer element appears later in the code
            
                    }
                    body > div > div > footer > h2,
                    body > div > div > footer > div > span {

                        color : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
            
                    }
                    body > div > div > footer > div > a {

                        color           : rgba( 255, 255, 255, 1 ) !important; // change the footer text color to white
                        text-decoration : underline;  // underline " About " 
            
                    }
                    @media all and ( max-width : 1280px ) {

                        body > div > div > header > nav > div:nth-child( 1 ) {

                            margin : 1.5rem 0 1.0rem 0 !important; // provide spacing between logo and nav elements on
                            // small screen sizes
                    
                        }

                    }
                `}
			</style>

        </div>

    );

}

