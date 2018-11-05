class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      salesOrder: [],
      viewEdit: false
    };
    this.deleteSalesOrder = this.deleteSalesOrder.bind(this);
    this.editSalesOrder = this.editSalesOrder.bind(this);
    //this.cancelEdit = this.cancelEdit.bind(this);
    this.addSalesOrder = this.addSalesOrder.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  editSalesOrder(e) {
    this.setState({ viewEdit: false });
  }
  addSalesOrder(salesorder) {
    var that = this;
    return function() {
      console.log(salesorder);
      that.state.salesOrder.push(salesorder);
      that.setState({ viewEdit: !this.state.viewEdit });
      console.log("Hello");
      //that.setState({});
    };
  }
  deleteSalesOrder(e) {
    var that = this;
    return function() {
      that.fetchdata("DELETE", { orderId: e });
      var ord = that.state.salesOrder.filter(
        salesOrder => salesOrder.orderId !== e
      );
      that.setState({ salesOrder: ord });
    };
  }
  changeView() {
    console.log("View");
    this.setState({ viewEdit: !this.state.viewEdit });
  }
  render() {
    if (this.state.viewEdit)
      return (
        <View
          salesOrder={this.state.salesOrder}
          changeView={this.changeView}
          editSalesOrder={this.editSalesOrder}
        />
      );
    else
      return (
        <createorder
          addSalesOrder={this.addSalesOrder}
          changeView={this.changeView}
        />
      );
  }
}
