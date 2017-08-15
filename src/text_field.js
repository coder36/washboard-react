import React from 'react'

export default class extends React.Component {

    state = { val: this.props.value || "", valid: true }

    componentDidMount() {
        const {val} = this.state
        const {rule} = this.props
        const valid = (rule && rule(val)) || !rule

        if( !this.props.onChange ) return
        this.props.onChange(valid ? val : null)
    }
    
    onChange(e) {
        const val = e.target.value
        const {rule} = this.props
        const valid = (rule && rule(val)) || !rule

        this.setState({val, valid: rule(val)})

        if( !this.props.onChange ) return
        this.props.onChange(valid ? val : null)
    }

    render() {
        const {val, valid} = this.state
        let styles = {}
        if( val.length > 0 && !valid ) {
            styles = {color: "#CA0101"}
        }
        return(
            <div style={{textAlign: "left"}}>
                <input style={styles} type={this.props.type || "text"} onChange={ (e) => this.onChange(e)} id="field" value={val} placeholder={this.props.label}/>                
            </div>
        )        
    }
}