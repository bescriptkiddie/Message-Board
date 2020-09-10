import React, { Component, Fragment } from 'react';
import "./index.css";
import AddMessage from './addMessage';
import MessageList from './messageList';
import Sum from './sum';
class App extends Component {
  state = {
    data: [
      {
        id: 0,
        name: "大头儿子",
        message: "我要当个太空人！",
        checked: false
      }, {
        id: 1,
        name: "小头爸爸",
        message: "那我就是太空人他爸～",
        checked: true
      }
    ]
  }
  // 添加留言
  addMessage=(name,message)=>{
    let { data } = this.state;
    this.setState({
      data:[{
        id: Date.now(),
        name,
        message,
        checked:false
      },...data]
    });
  }
  // 删除留言
  removeMessage=(id)=>{
    let { data } = this.state;
    this.setState({
      data:data.filter(item=>(id!==item.id))
    });
  }
  // 选中留言
  checkedMessage=(id,checked)=>{
    let { data } = this.state;
    data.forEach(item=>{
      if(id===item.id){
        item.checked = checked
      }
    });
    this.setState({
      data
    });
  }
  // 编辑留言
  editMessage=(id,message)=>{
    let { data } = this.state;
    data.forEach(item=>{
      if(id===item.id){
        item.message = message;
      }
    });
    this.setState({
      data
    });
  }
  //全选
  checkedAllMessage=(checked)=>{
    let { data } = this.state;
    data.forEach(item=>{
        item.checked = checked;
    });
    this.setState({
      data
    })
  }
  //删除选中项
  removeCheckedMessage=()=>{
    let { data } = this.state;
    this.setState({
      data:data.filter(item=>(!item.checked))
    });
  }
  render() {
    let { data } = this.state;
    return <section className="wrap">
      <h2 className="title">留言板</h2>
      <AddMessage
        addMessage = {this.addMessage}
      />
      {
        data.length > 0 ?
          <Fragment>
            <MessageList
              data={data}
              removeMessage = {this.removeMessage}
              checkedMessage = {this.checkedMessage}
              editMessage = {this.editMessage}
            />
            <Sum
              data={data}
              checkedAllMessage={this.checkedAllMessage}
              removeCheckedMessage={this.removeCheckedMessage}
            />
          </Fragment>
          : ""
      }


    </section>
  }
}

export default App;
