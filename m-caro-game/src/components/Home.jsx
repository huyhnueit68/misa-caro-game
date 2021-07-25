import React, { useEffect, useState } from "react";
import Header from "./commons/Header";
import Footer from "./commons/Footer";
import Row from "./board/Row";

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function Home({array_board }) {
    return (
        <div className="container">
            {/* header */}
            <Header />
            {/* Content */}
            <div className="content">
                <div className="content__board-game">
                    <div className="col-md-10">
                        {array_board.map((e, index) => (
                            <div>
                                <Row
                                    elements={e}
                                    key={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="content__info">
                    <p className="title">INFORMATION</p>
                    <p>ACTIVE: {piece_current}</p>
                    <p> {" "} Result :{" "}
                        {is_win == 1 ? (
                            <span>{piece_current} WIN</span>
                        ) : is_win == 0 ? (
                            <span>DRAW</span>
                        ) : null}
                    </p>
                    <button onClick={() => reset_map()} className="btn btn-info">
                    Reset
                    </button>
                </div> */}
            </div>
            {/* Footer */}
            <Footer />
        </div>  
    );

}