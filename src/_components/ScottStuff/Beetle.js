"use strict"
//this spits out record table with buttons
import React from 'react';
import PropTypes from 'prop-types';
//import RModalContainer from './RModalContainer';
import Button from '@material-ui/core/Button';
import ShellContainer from './ShellContainer';

//import ModalButtonContainer from './ModalButtonContainer';
//var ModalDataToBeDisplayed;

function compareDates(dataStructure){//date given as string 
    let y=0;
   //let showDates=[];

    let theDate = new Date();
    let dateString=JSON.stringify(theDate);

    dataStructure.someOfTheShowDates=dataStructure.someOfTheDates.slice();

    //console.log("datestring:" +JSON.stringify(dataStructure));
    let dateValue=dateString.substring(1,5)+dateString.substring(6,8)+dateString.substring(9,11);
    //console.log("buttonxXXXXX:" +dataStructure.someButtonValue);


    if(dataStructure.someButtonValue=="future"){


        let j=0;
        while(j< dataStructure.someOfTheShowDates.length){

            let dateValue2=dataStructure.someOfTheDates[j].substring(0,4)+dataStructure.someOfTheDates[j].substring(5,7)+dataStructure.someOfTheDates[j].substring(8,10);

            if( Number(dateValue) > Number(dateValue2) ){
                dataStructure.someOfTheShowDates[j]="x";
  
            }
            j++;
        }


        
    }

        else if (dataStructure.someButtonValue=="all"){

        }

        else if(dataStructure.someButtonValue=="past"){


            let j=0;
            while(j< dataStructure.someOfTheShowDates.length){

                let dateValue2=dataStructure.someOfTheDates[j].substring(0,4)+dataStructure.someOfTheDates[j].substring(5,7)+dataStructure.someOfTheDates[j].substring(8,10);
 

                if( Number(dateValue) < Number(dateValue2) ){
                    //dataStructure.someOfTheShowDates[y]=dataStructure.someOfTheDates[i];
                    dataStructure.someOfTheShowDates[j]="x";
      
                }
                j++;
            }


            
        }else{

        }

    

}

// function buttonPress(dataStructure, buttonStr){
//     dataStructure.buttonValue=buttonStr;
//     compareDates(dataStructure);
//     action1(dataStructure.someOfShowDates)
// }


const Beetle = ({ beetleInfoData, action1}) => {
    //console.log(JSON.stringify(beetleInfoData)+"hecka")
    let content='';

    function buttonPress(dataStructure, buttonStr){
        dataStructure.someButtonValue=buttonStr;
        compareDates(dataStructure);
        //console.log("what the fuck"+dataStructure.someOfTheShowDates);
        action1(dataStructure.someOfTheShowDates);
    }

    let dataStructure={
        someOfTheDates:[],
        someOfTheShowDates:[],
        someButtonValue:"all"
    }

    let theDates=[];
    let showDates=[];
    let buttonValue="ALL";
    //dateButtonValue


    //console.log("debugxxxx67"+JSON.stringify(patInfoData));

    if(beetleInfoData && beetleInfoData.requestSucessful){//pData.value[0]["firstname"]
        let theDate = new Date();
        //let theDates=[];
        //let showDates=[]
        for(let i=0;i<beetleInfoData.beetleInfo.value.length;i++){
            dataStructure.someOfTheDates[i]=beetleInfoData.beetleInfo.value[i].wc_appointmentdate;
        }
        compareDates(dataStructure);
        



        

        content = (

             <div >
                                  <div>
                     <Button onClick={ ()=> buttonPress(dataStructure,"all")}>All</Button>
                     <Button onClick={ ()=> buttonPress(dataStructure,"past")}>Past</Button>
                     <Button onClick={ ()=> buttonPress(dataStructure,"future")}>Future</Button>
                 </div>
                 {/* {JSON.stringify(dataStructure.someOfTheShowDates)+"hhh"} */}
                 {/* {JSON.stringify(beetleInfoData)} */}
                 <ShellContainer datedData={dataStructure}/>
                 {/* <div>
                     <Button>All</Button>
                     <Button>Past</Button>
                     <Button>Future</Button>
                 </div> */}
            </div>)
    }

    if(beetleInfoData && beetleInfoData.requestFailed){
        content = 
        (
            <div className="alert alert-danger" role="alert">
                Error while loading patinfo!
            </div>
        )
    }
        
    return(
        <div>
            {content}
        </div>
    );
}



export default Beetle;

/*three buttons, default is all, future, past, this will work just like pagination
//take dates make date object that makes a value out of a date
*/ 