import React, {Component} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {boxes: [] }
        this.createBox = this.createBox.bind(this);
    }
    createBox(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }
    removeBox(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box 
                key={box.id} 
                id={box.id} 
                width={box.width} 
                height={box.height} 
                color={box.color}
                removeBox = { () => this.removeBox(box.id)}
            />
        ));
        return(
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm createBox={this.createBox}/>
                {boxes}
                

            </div>
        )
    };
};


export default BoxList;