import React, { useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";

import { getCountries } from "./actions";









const App = (props) => {


    useEffect(() => {
        props.getCountries()
    }, []);




    return (

        <div className="App">
            <h1>React Dersleri</h1>
            <h2>React Router</h2>

            {props.isLoading ? <p><img style={{width:150,height:150}} src='https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif' alt='yükleniyor...'/></p>
                : props.countries.map(country => {
                    return (
                        <div key={country.name}>
                            <h3>{country.name}</h3>
                            <h4>{country.capital}</h4>
                            <p>
                                <img
                                    src={country.flag}
                                    alt={country.name}
                                    style={{ width: "100px" }}
                                />
                            </p>
                        </div>
                    );
                })}
        </div>
    );
}


const mapStateToProps = state => {
    return {
        countries: state.countries,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { getCountries })(App);