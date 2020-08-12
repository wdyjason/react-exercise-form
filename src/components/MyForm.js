import React, { Component } from "react";
import './MyForm.less'

class MyForm extends Component {
    state = {
        name: "",
        gender: "",
        description: "",
        checkBox: false
    };

    fieldChangeHandle = (field, event) => {
        this.setState({
            [field] : event.target.value,
        });
    };

    checkBoxChangeHandle = (event) => {
        this.setState({
            checkBox: event.target.checked,
        });
    }

    submitHandle = (event) => {
        console.log(this.state);
        event.preventDefault();
    }
    

    render() {
        const {name, gender, description, checkBox} = this.state;
        return(
            <form className="whole-form" onSubmit={this.submitHandle}>
                <div className="input_name">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(event) => this.fieldChangeHandle("name", event)} placeholder="Your name"></input>
                </div>
                <div className="input_gender">
                    <label>Gender</label>
                    <input list="gender_list" value={gender} onChange={(event) => this.fieldChangeHandle("gender", event)} placeholder="Male"></input>
                    <datalist id="gender_list">
                        <option value="Male"></option>
                        <option value="Female"></option>
                    </datalist>
                </div>
                <div className="input_text_area">
                    <label>Description</label>
                    <textarea id="textArea" value={description} onChange={(event) => this.fieldChangeHandle("description", event)} placeholder="Description about your self"></textarea>
                </div>
                <div className="input_check">
                    <input type="checkbox" value={checkBox} onChange={this.checkBoxChangeHandle}></input>
                    <span>I have read the terms of conduct</span>
                </div>
                <div className="input_submit">
                    <input id="submit" type="submit" value="Submit" disabled={!name || !gender || !description || !checkBox}></input>
                </div>
            </form>
        );
    }
}
export default MyForm;