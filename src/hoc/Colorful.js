import React from 'react'

const Colorful = (WrappedComponent) => {  //high order component

    const colours = ['red', 'yellow', 'green', 'orange', 'blue', 'pink'];
    const randomColor = colours[Math.floor(Math.random() * 5)];
    const classname = randomColor + '-text';


    return  (props) => {
        return (
            <div className={classname}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Colorful;