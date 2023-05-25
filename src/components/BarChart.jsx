import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { eps: '0.000', acc: 0.917586, accCT: 0.998012 },
  { eps: '0.001', acc: 0.891549, accCT: 0.997846 },
  { eps: '0.002', acc: 0.870501, accCT: 0.997637 },
  { eps: '0.003', acc: 0.842229, accCT: 0.997523 },
  { eps: '0.004', acc: 0.810425, accCT: 0.997219 },
  { eps: '0.005', acc: 0.776699, accCT: 0.99689 },
  { eps: '0.006', acc: 0.751976, accCT: 0.996816 },
  { eps: '0.007', acc: 0.726866, accCT: 0.996714 },
  { eps: '0.008', acc: 0.690931, accCT: 0.994912 },
  { eps: '0.009', acc: 0.664791, accCT: 0.994766 },
  { eps: '0.010', acc: 0.627859, accCT: 0.994689 },
  { eps: '0.011', acc: 0.605551, accCT: 0.994613 },
  { eps: '0.012', acc: 0.581401, accCT: 0.994402 },
  { eps: '0.013', acc: 0.516688, accCT: 0.9943 },
  { eps: '0.014', acc: 0.462954, accCT: 0.994282 },
  { eps: '0.015', acc: 0.422345, accCT: 0.994258 },
  { eps: '0.016', acc: 0.397725, accCT: 0.994227 },
  { eps: '0.017', acc: 0.373233, accCT: 0.994206 },
  { eps: '0.018', acc: 0.36465, accCT: 0.993252 },
  { eps: '0.019', acc: 0.323722, accCT: 0.992098 },
  { eps: '0.020', acc: 0.318682, accCT: 0.990906 },
  { eps: '0.021', acc: 0.311477, accCT: 0.989656 },
  { eps: '0.022', acc: 0.307419, accCT: 0.98927 },
  { eps: '0.023', acc: 0.29981, accCT: 0.988538 },
  { eps: '0.024', acc: 0.290508, accCT: 0.987371 },
  { eps: '0.025', acc: 0.28508, accCT: 0.987127 },
  { eps: '0.026', acc: 0.284186, accCT: 0.985157 },
  { eps: '0.027', acc: 0.282375, accCT: 0.9851 },
  { eps: '0.028', acc: 0.286666, accCT: 0.984351 },
  { eps: '0.029', acc: 0.294695, accCT: 0.984279 },
  { eps: '0.030', acc: 0.294359, accCT: 0.984185 },
  { eps: '0.031', acc: 0.290808, accCT: 0.984144 },
  { eps: '0.032', acc: 0.286952, accCT: 0.983557 },
  { eps: '0.033', acc: 0.278619, accCT: 0.983203 },
  { eps: '0.034', acc: 0.268966, accCT: 0.981912 },
  { eps: '0.035', acc: 0.261923, accCT: 0.978493 },
  { eps: '0.036', acc: 0.256025, accCT: 0.973117 },
  { eps: '0.037', acc: 0.250213, accCT: 0.963218 },
  { eps: '0.038', acc: 0.242509, accCT: 0.959557 },
  { eps: '0.039', acc: 0.230314, accCT: 0.954086 },
  { eps: '0.040', acc: 0.222563, accCT: 0.934881 },
  { eps: '0.041', acc: 0.218032, accCT: 0.920027 },
  { eps: '0.042', acc: 0.216853, accCT: 0.892548 },
  { eps: '0.043', acc: 0.215928, accCT: 0.874272 },
  { eps: '0.044', acc: 0.216009, accCT: 0.828906 },
  { eps: '0.045', acc: 0.217209, accCT: 0.827803 },
  { eps: '0.046', acc: 0.218603, accCT: 0.824393 },
  { eps: '0.047', acc: 0.21926, accCT: 0.801365 },
  { eps: '0.048', acc: 0.220747, accCT: 0.750976 },
  { eps: '0.049', acc: 0.221791, accCT: 0.739295 },
  { eps: '0.050', acc: 0.222875, accCT: 0.729293 },
  { eps: '0.051', acc: 0.223032, accCT: 0.702285 },
  { eps: '0.052', acc: 0.222446, accCT: 0.653895 },
  { eps: '0.053', acc: 0.222273, accCT: 0.557599 },
  { eps: '0.054', acc: 0.222088, accCT: 0.546722 },
  { eps: '0.055', acc: 0.223088, accCT: 0.513759 },
  { eps: '0.056', acc: 0.225488, accCT: 0.493056 },
  { eps: '0.057', acc: 0.227405, accCT: 0.487904 },
  { eps: '0.058', acc: 0.227621, accCT: 0.486391 },
  { eps: '0.059', acc: 0.226644, accCT: 0.484122 },
  { eps: '0.060', acc: 0.22643, accCT: 0.482322 },
  { eps: '0.061', acc: 0.226436, accCT: 0.481547 },
  { eps: '0.062', acc: 0.226576, accCT: 0.480397 },
  { eps: '0.063', acc: 0.22692, accCT: 0.47903 },
  { eps: '0.064', acc: 0.227631, accCT: 0.393796 },
  { eps: '0.065', acc: 0.228249, accCT: 0.392273 },
  { eps: '0.066', acc: 0.228917, accCT: 0.289931 },
  { eps: '0.067', acc: 0.229643, accCT: 0.270539 },
  { eps: '0.068', acc: 0.23034, accCT: 0.266348 },
  { eps: '0.069', acc: 0.231127, accCT: 0.236921 },
  { eps: '0.070', acc: 0.231174, accCT: 0.233649 },
  { eps: '0.071', acc: 0.231445, accCT: 0.227733 },
  { eps: '0.072', acc: 0.231798, accCT: 0.211518 },
  { eps: '0.073', acc: 0.232432, accCT: 0.205052 },
  { eps: '0.074', acc: 0.233195, accCT: 0.198425 },
  { eps: '0.075', acc: 0.234049, accCT: 0.188752 },
  { eps: '0.076', acc: 0.235151, accCT: 0.181534 },
  { eps: '0.077', acc: 0.236309, accCT: 0.171823 },
  { eps: '0.078', acc: 0.237457, accCT: 0.152744 },
  { eps: '0.079', acc: 0.238489, accCT: 0.151008 },
  { eps: '0.080', acc: 0.239596, accCT: 0.150325 },
  { eps: '0.081', acc: 0.241831, accCT: 0.149793 },
  { eps: '0.082', acc: 0.243451, accCT: 0.149005 },
  { eps: '0.083', acc: 0.245296, accCT: 0.147816 },
  { eps: '0.084', acc: 0.24599, accCT: 0.14656 },
  { eps: '0.085', acc: 0.246068, accCT: 0.116185 },
  { eps: '0.086', acc: 0.246386, accCT: 0.115891 },
  { eps: '0.087', acc: 0.246654, accCT: 0.115614 },
  { eps: '0.088', acc: 0.247128, accCT: 0.115245 },
  { eps: '0.089', acc: 0.24756, accCT: 0.115069 },
  { eps: '0.090', acc: 0.248148, accCT: 0.11337 },
  { eps: '0.091', acc: 0.248965, accCT: 0.112072 },
  { eps: '0.092', acc: 0.249794, accCT: 0.109721 },
  { eps: '0.093', acc: 0.250645, accCT: 0.037403 },
  { eps: '0.094', acc: 0.251444, accCT: 0.037327 },
  { eps: '0.095', acc: 0.251763, accCT: 0.036975 },
  { eps: '0.096', acc: 0.252505, accCT: 0.036113 },
  { eps: '0.097', acc: 0.253171, accCT: 0.034872 },
  { eps: '0.098', acc: 0.254139, accCT: 0.034107 },
  { eps: '0.099', acc: 0.255086, accCT: 0.031036 },
  { eps: '0.100', acc: 0.256043, accCT: 0.025735 }
]

export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="eps" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="eps" height={30} stroke="#8884d8" startIndex={20} endIndex={40} />
          <Bar dataKey="acc" fill="#8884d8" />
          <Bar dataKey="accCT" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}