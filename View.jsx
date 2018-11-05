class Row extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.salesOrder.orderId}</td>
        <td>{this.props.salesOrder.orderDate}</td>
        <td>{this.props.salesOrder.customerName}</td>
        <td>{this.props.salesOrder.billTo.city}</td>
        <td>{this.props.salesOrder.ShipTo.city}</td>
        <td>{this.props.salesOrder.totalAmount}</td>
        <td>
          {
            <button
              onClick={this.props.editSalesOrder(this.props.salesOrder.orderId)}
            >
              Edit
            </button>
          }
        </td>
        <td>
          {
            <button
              onClick={this.props.deleteSalesOrder(
                this.props.salesOrder.orderId
              )}
            >
              Delete
            </button>
          }
        </td>
      </tr>
    );
  }
}
class View extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="container">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Customer Name</th>
              <th>Bill Address</th>
              <th>Ship Address</th>
              <th>Total Amount</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            <tr>
              <td>
                <input type="text" required />
              </td>
              <td>
                <input type="date" required />
              </td>
              <td>
                <input type="text" required />
              </td>
              <td>
                <input type="text" required />
              </td>
              <td>
                <input type="text" required />
              </td>
              <td>
                <input type="text" required />
              </td>
              <td>
                <button
                  type="Submit"
                  value="Submit"
                  onClick={this.props.addSalesOrder}
                >
                  Search
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.state.salesOrder.map(salesOrder => {
              return (
                <Row
                  key={this.props.salesOrder.orderId}
                  salesOrder={this.props.salesOrder}
                  deleteSalesOrder={this.props.deleteSalesOrder}
                  editSalesOrder={this.props.editSalesOrder}
                />
              );
            })}
            <tr>
              <td>
                <button
                  type="Submit"
                  value="Submit"
                  onClick={this.props.addSalesOrder}
                >
                  Create New Sales Order
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
