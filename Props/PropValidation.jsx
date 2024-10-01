import React from 'react';
import propTypes from 'prop-types';
function Propvalidation(props) {
    return(
        <>
            <div>
                <h1> ReactJS props validation example</h1>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Valid</th>
                    </tr>

                    <tr>
                        <td>Array</td>
                        <td>{props.propArray}</td>
                        <td>{props.propArray ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Boolean</td>
                        <td>{props.propBool ? "true" : "false"}</td>
                        <td>{props.propBool ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Function</td>
                        <td>{props.propFunc(5)}</td>
                        <td>{props.propFunc(5) ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>String</td>
                        <td>{props.propString}</td>
                        <td>{props.propString ? "true" : "false"}</td>
                    </tr>
                    <tr>
                        <td>Number</td>
                        <td>{props.propNumber}</td>
                        <td>{props.propNumber ? "true" : "false"}</td>
                    </tr>
                </table>
            </div>
        </>
    );
}
Propvalidation.propTypes = {
    propArray: propTypes.array.isRequired,
    propBool: propTypes.bool.isRequired,
    propFunc: propTypes.func,
    propNumber: propTypes.number,
    propSring: propTypes.string,

}
Propvalidation.defaultProps = {
    propArray: [1,2,3],
    propBool: true,
    propFunc: function(x){return x +5},
    propNumber: 5,
    propString: "Hello",
};
export default Propvalidation;
