
import { ReactComponent as construct }  from './markers/construct.svg';
import { ReactComponent as constructNeoclass } from './markers/constructNeoclass.svg';
import { ReactComponent as eclectic } from './markers/eclectic.svg';
import { ReactComponent as functional } from './markers/functional.svg';
import { ReactComponent as modern } from './markers/modernism.svg';
import { ReactComponent as neoclassic } from './markers/neoclassic.svg';
import { ReactComponent as postconstructiv } from './markers/postconstruct.svg';
import { ReactComponent as postorient } from './markers/postconstructorieny.svg';
import { ReactComponent as postconneo } from './markers/postcostructNeoclass.svg';
import { ReactComponent as unknown } from './markers/unknown.svg';

import {
    Typography,
    Paper,
    TableBody,
    TableRow,
    TableCell,
    TableContainer,
    Table,
    SvgIcon 
} from '@mui/material';

export default function Legend() {
    return (
        <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table" >
            <TableBody>
                <TableRow>
                    <TableCell align="center" colSpan={3} >
                        <Typography sx={{ fontWeight: 'bold' }}> Условные обозначения </Typography>
                    </TableCell>

                 </TableRow>
                <TableRow size="small">  
                    <TableCell> 
                       
                    <SvgIcon component={construct}  inheritViewBox='True' />
                    </TableCell>
                    <TableCell component="th" scope="row">
                    <Typography> конструктивизм </Typography>
                </TableCell></TableRow> 
                 <TableRow>
                    <TableCell>
                    <SvgIcon component={postconstructiv}  inheritViewBox='True' />
                    </TableCell>
                    <TableCell> <Typography> постконструктивизм </Typography>  </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                    <SvgIcon component={functional}  inheritViewBox='True' />
                    </TableCell>
                    <TableCell> <Typography> функционализм </Typography>  </TableCell>
                </TableRow> 
                <TableRow>
                    <TableCell>
                    <SvgIcon component={modern}  inheritViewBox='True' />
                    </TableCell>
                    <TableCell> <Typography> модернизм </Typography>  </TableCell>
                </TableRow> 
                <TableRow>
                    <TableCell>
                    <SvgIcon component={neoclassic}  inheritViewBox='True' />
                    </TableCell>
                    <TableCell> <Typography> неоклассицизм </Typography>  </TableCell>
                </TableRow> 
                <TableRow>
                    <TableCell>
                    <SvgIcon component={eclectic}  inheritViewBox='True' />
                    </TableCell>
                    <TableCell> <Typography> эклектика </Typography>  </TableCell>
                </TableRow> 
                {/* <TableRow>
                    <TableCell>
                    <SvgIcon component={postorient}  inheritViewBox='True' />
                    </TableCell>
                    <TableCell> <Typography> постконструктивизм ориентальный </Typography>  </TableCell>
                </TableRow>  */}
                <TableRow>
                    <TableCell>
                    <SvgIcon component={constructNeoclass}  inheritViewBox='True' />
                    </TableCell>
                    <TableCell> <Typography> конструктивизм, неоклассицизм </Typography>  </TableCell>
                </TableRow> 
                <TableRow>
                    <TableCell>
                    <SvgIcon component={postconneo}  inheritViewBox='True' />
                    </TableCell>
                    <TableCell> <Typography> постконструктивизм, неоклассицизм </Typography>  </TableCell>
                </TableRow> 

            </TableBody>
        </Table>
    </TableContainer>
    );
  };
  
