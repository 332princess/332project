import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './style';
import Like from './components/Like';
import PlayList from './components/PlayList';
import Info from './components/Info';

const Detail = () => {
  return (
    <div>
      {/* <Like /> */}
      {/* <PlayList /> */}
      <Info />
    </div>
  );
};
export default Detail;
