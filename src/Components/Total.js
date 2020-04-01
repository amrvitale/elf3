import React from 'react';
import Summary from './Summary';
import Option from './Option';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


export default class Total extends React.Component{

  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

      return (
        <div className="summary__total__value">
              {USCurrencyFormat.format(total)}
          </div>
      )
      return (
        <section className="main__summary">
          <h2>Your cart</h2>
          {summary}
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              <Total selected={this.props.selected} />
            </div>
          </div>
        </section>
      )
    }
  }
