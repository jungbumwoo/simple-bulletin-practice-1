import React from "react";
import { FaAlignJustify } from "react-icons/fa";


const Navigation = ({
    boxVisible,
    toggleBoxVisible,
    clickLogout,
    clickWriteButton
}) => (
    <div>
        <span onClick={toggleBoxVisible}>
            <FaAlignJustify />
        </span>
        {boxVisible && (
            <div>
                <span onClick={clickLogout}>logout</span>
                <span onClick={clickWriteButton}>write</span>
            </div>
        )}
    </div>
);

export default Navigation;
