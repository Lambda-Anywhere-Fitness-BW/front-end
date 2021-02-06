import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
       fontFamily: "'Chonburi', cursive",
       textAlign: 'center',
       fontSize: '3rem',
       marginTop: '5rem',
       marginLeft:'3.5%'
    },
    boxes: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: '3.5%'
    },
    box: {
        border: '2px solid #2160A0',
        borderRadius: '10px',
        padding: '2%',
        width: '65%',
        margin: '1% auto 1% auto'
    },
    text: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    text2: {
        fontSize: '1.25rem',
    },
})

const FAQ = () => {

    const classes = useStyles();

    return (
        <section className='main-section'>
            <h2 className={classes.header}>FAQs</h2>
            <div className={classes.boxes}>
                
                <div className={classes.box}>
                    <details>
                        <summary className={classes.text}>How many classes can I sign up for?</summary>
                        <p className={classes.text2}>The great thing about AnyWhere Fitness is that you can sign up for as many classes as you want, as long as they don't overlap with start and end times! </p>
                    </details>
                </div>

                <div className={classes.box}>
                    <details>
                        <summary className={classes.text}>Who are the instructors?</summary>
                        <p className={classes.text2}>We have a great range of instructors connected on AnyWhere Fitness that are skilled in many areas of fitness, such as kickboxing, yoga, spinning, and much more!</p>
                    </details>
                </div>

                <div className={classes.box}>
                    <details>
                        <summary className={classes.text}>Why should I use this?</summary>
                        <p className={classes.text2}> Anywhere Fitness helps you support your local fitness locations while also providing you with a fantastic set of instructors with a great offering. You can also get exclusive digital punch passes for some cool freebies!  </p>
                    </details>
                </div>
                <div className={classes.box}>

                    <details>
                        <summary className={classes.text}>Can I switch Classes</summary>
                        <p className={classes.text2}>Yes! Classes can be switched within 24-hours from their start time.</p>
                    </details>
                </div>

                <div className={classes.box}>
                    <details>
                        <summary className={classes.text}>Can I upgrade to Pro at a later date if I signed up with the free version? </summary>
                        <p className={classes.text2}>Yes, you can upgrade to Pro at anytime.</p>
                    </details>
                </div>

            </div>
        </section>
    );
}

export default FAQ;