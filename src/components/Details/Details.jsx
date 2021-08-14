import React from 'react';
import { Card, CardHeader, CardContent, Typography ,} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense} style={{ background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}} >
      <CardHeader title={title} subheader={subheader} style={{background: '#fff'}}/>
      <CardContent>
        <Typography variant="h5"  >${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;
