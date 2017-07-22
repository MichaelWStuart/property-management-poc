import React from 'react';

class Issue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <tr>
        <td>
          {this.props.issue.issueName}
        </td>
        <td>
          {this.props.issue.conditionDefault}
        </td>
        <td>
          <input
            type='button'
            name='changeCondition'
            value='Change Condition'
            className='changeCondition'
          />
        </td>
      </tr>
    );
  }
}

export default Issue;
