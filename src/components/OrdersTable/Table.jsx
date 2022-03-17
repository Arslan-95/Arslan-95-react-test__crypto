import React from 'react';
import PropTypes from 'prop-types';

function Table({ data, loaded }) {
  return (
    <>
      {!loaded && 'Данные загружаются'}
      {loaded && data.length === 0 && 'Таблица пуста'}
      {loaded && data.length > 0 && (
        <table className="Orders-table">
          <thead>
            <tr>
              <th>id</th>
              <th>Start</th>
              <th>Finally</th>
              <th>Wallet Rate</th>
              <th>Wallets Count</th>
              <th>Change Type</th>
              <th>Time & Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const start = item.changeType === 'buy' ? item.note : item.crypto;
              const end = item.changeType === 'buy' ? item.crypto : item.note;

              const date = getStringOfDate(item.date);
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{start}</td>
                  <td>{end}</td>
                  <td>{item.walletRate}</td>
                  <td>{item.walletsCount}</td>
                  <td>{item.changeType}</td>
                  <td>{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  loaded: PropTypes.bool,
};

function getStringOfDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  let hours = filterTime(date.getHours());
  let minutes = filterTime(date.getMinutes());

  const result = `${hours}:${minutes} ${day}.${month}.${year}`;
  return result;
}

function filterTime(value) {
  let result = String(value);
  result = '0' + result;
  result = result.slice(-2);

  return result;
}

export default Table;
