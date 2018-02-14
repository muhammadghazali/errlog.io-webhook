import { IErrLogIoOptions } from './IErrLogIoOptions';
import { HttpRequest } from './HttpRequest';
export interface IReporterOptions {
    url?: string;
    httpRequest?: HttpRequest;
    dateFormat?: string;
    errLogIoOptions: IErrLogIoOptions;
}
