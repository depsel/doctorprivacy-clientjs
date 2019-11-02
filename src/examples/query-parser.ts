import { inspect } from 'util';

import {
  LeakipediaReportQuery,
  leakipediaReportQueryParser
} from '../helpers';

function detailedLog(obj: any){
  console.log(inspect(obj, {
    colors: true,
    compact: false
  }));
}

function run(query: string){
  let result: LeakipediaReportQuery;
  result=leakipediaReportQueryParser(query);
  console.log(query);
  detailedLog(result);
  console.log();
}

{
  run("123");
  run("mail@box@123.123.123.123");
  run("email1@domain.com email2@domain.com,email3@domain.com; email4@domain.com");
  run("email1@domain.com domain.com, email3@domain.com");
  run("domain1.com domain2.com, email3@domain.com");
  run("domain1.com    ;   domain2.com");
}
