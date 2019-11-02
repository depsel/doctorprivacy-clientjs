import { inspect } from 'util';

import { DoctorPrivacyClient } from '../api-client.service';

function detailedLog(obj: any){
  console.log(inspect(obj, {
    colors: true,
    compact: false
  }));
}

async function report(dp: DoctorPrivacyClient): Promise<void>{
  
  detailedLog(await dp.leakipedia.report(true as any));
  detailedLog(await dp.leakipedia.report("a@a.com serfe.com", "es"));
  detailedLog(await dp.leakipedia.report("alejandronicodemo@hotmail.com,sofianicodemo@gmail.com", "es"));

}

{
  const dp=new DoctorPrivacyClient('https://local.engine.doctorprivacy.com/api');

  report(dp).then(()=>{
    console.log("LISTO");
  });
}
