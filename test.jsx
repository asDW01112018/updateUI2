class create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5,
      salesOrder: [],
      tempEdit: {},
      tempSalesOrder: {
        orderId: null,
        customerName: "",
        orderDate: "",
        payemtMethod: "",
        totalAmount: "",
        paidAmount: "",
        balanceAmount: "",
        billTo: {
          companyName: "",
          address: "",
          city: "",
          stateProv: "",
          zip: "",
          country: "",
          phone: ""
        },
        sameAddress: false,
        shipTo: {
          companyName: "",
          address: "",
          city: "",
          stateProv: "",
          zip: "",
          country: "",
          phone: ""
        }
      }
    };
    this.resetAll = this.resetAll.bind(this);
    this.addSalesOrder = this.addSalesOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBillToChange = this.handleBillToChange.bind(this);
    this.handleShipToChange = this.handleShipToChange.bind(this);
    this.handleSameAddress = this.handleSameAddress.bind(this);
  }
  handleBillToChange(key) {
    var that = this;
    return function(xyz) {
      var temp = Object.assign({}, that.state.tempSalesOrder.billTo);
      temp[key] = xyz.target.value;
      that.state.tempSalesOrder.billTo = temp;
      that.setState({});
    };
  }
  handleSameAddress(key) {
    var that = this;
    return function(xyz) {
      that.state.salesOrder.sameAddress = !that.state.salesOrder.sameAddress;
      that.setState({});
      console.log(that.state.salesOrder.sameAddress);
    };
  }
  handleShipToChange(key) {
    var that = this;
    return function(xyz) {
      var temp = Object.assign({}, that.state.tempSalesOrder.shipTo);
      temp[key] = xyz.target.value;
      that.state.tempSalesOrder.shipTo = temp;
      that.setState({});
    };
  }
  resetAll() {
    var temp = Object.assign({}, that.state.tempSalesOrder);
    that.state.tempSalesOrder = temp;
  }
  handleSameAddress(key) {
    var that = this;
    return function(xyz) {
      that.state.tempSalesOrder.sameAddress = !that.state.tempSalesOrder
        .sameAddress;
      if (that.state.tempSalesOrder.sameAddress) {
        //var temp = Object.assign({}, that.state.tempSalesOrder.billTo);
        that.state.tempSalesOrder.shipTo = that.state.tempSalesOrder.billTo;
      } else {
        var temp = Object.assign({}, that.state.tempSalesOrder.shipTo);
        that.state.tempSalesOrder.shipTo = temp;
      }
      that.setState({});
      console.log(that.state.tempSalesOrder.sameAddress);
    };
  }
  //handleShipToChange(){}
  handleChange(key) {
    var that = this;
    return function(xyz) {
      var temp = Object.assign({}, that.state.tempSalesOrder);
      temp[key] = xyz.target.value;
      that.setState({ tempSalesOrder: temp });
    };
  }
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-3">Customer Name</div>
          <div class="col-sm-9">
            <input
              type="text"
              value={this.state.tempSalesOrder.customerName}
              onChange={this.handleChange("customerName")}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">Order Date</div>
          <div class="col-sm-9">
            <input
              type="date"
              value={this.state.tempSalesOrder.orderDate}
              onChange={this.handleChange("orderDate")}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-6">Bill To</div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <Address
                  field={this.state.tempSalesOrder.billTo}
                  handleAddressChange={this.handleBillToChange}
                  edit={1}
                />
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="row">
              <div class="col-sm-4">
                <input
                  type="checkbox"
                  checked={this.state.tempSalesOrder.sameAddress}
                  onChange={this.handleSameAddress("sameAddress")}
                />
                Same As Billing
              </div>
              <div class="col-sm-2">Ship To</div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <Address
                  field={this.state.tempSalesOrder.shipTo}
                  handleAddressChange={this.handleShipToChange}
                  edit={1}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">Balance Amount</div>
          <div class="col-sm-9">
            <input
              type="number"
              value={this.state.tempSalesOrder.balanceAmount}
              onChange={this.handleChange("balanceAmount")}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">Paid Amount</div>
          <div class="col-sm-9">
            <input
              type="number"
              value={this.state.tempSalesOrder.paidAmount}
              onChange={this.handleChange("paidAmount")}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-3">Total Amount</div>
          <div class="col-sm-9">
            <input
              type="number"
              value={this.state.tempSalesOrder.totalAmount}
              onChange={this.handleChange("totalAmount")}
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-1">
            <button onClick={this.changeView}>Back</button>
          </div>
          <div class="col-sm-9" />
          <div class="col-sm-1">
            <button onClick={this.addSalesOrder}>Submit</button>
          </div>
          <div class="col-sm-1">
            <button onClick={this.reselAll}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}
