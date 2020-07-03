/**********************************************************
This is a React component for creating a LabReport modal
**********************************************************/
import React from "react";
import PropTypes from "prop-types";


export class LabReportModal extends React.Component {
    constructor(props) {
        super(props);
        // Bind the event handler functions
        this.onClose = this.onClose.bind(this);
    }
    
    // Method for closing the modal
    onClose(evnt) {
        this.props.onClose && this.props.onClose(evnt,"January");
    };

    // Render the modal
    render() {
        // If visibility is FALSE, then hide the modal
        if (!this.props.show) {
            return null;
        }
        // Else, visibility is TRUE, then show the modal
        return (
            <div className="LabReport-modal">
                <div className="LabReport-modal-content">
                    
                    {/* insert the modal Header & Body here */}
                    {this.props.children}
                    
                    {/* append the modal Footer here */}
                    <div className="LabReport-modal-footer">
                        <button className="Close-button" onClick={this.onClose}>
                            Close
                        </button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

// Define the accepted types of props for the LabReport modal
LabReportModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};
