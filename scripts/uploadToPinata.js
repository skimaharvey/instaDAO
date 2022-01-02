const pinataSDK = require('@pinata/sdk');
require('dotenv').config()


const {PINATA_KEY, PINATA_SECRET} = process.env;

const pinata = pinataSDK(PINATA_KEY, PINATA_SECRET);


const uploadJsonToIPFS = async () => {
    pinata.pinJSONToIPFS(
        {
            "name": 'InstaDAO Membership',
            "description": 'A DAO to Promote creators.',
            "image": 'https://ipfs.io/ipfs/QmRm4tcCBdt4KkZ53yeqmNyVYEU5U5cnRXvA6n2VDvJV3i', //Bradley contract image
            "primary_sale_recipient_address": '0x0000000000000000000000000000000000000000'
        },
    ).then((result) => {
        //handle successful authentication here
        console.log(result.IpfsHash);
        return result.IpfsHash
    }).catch((err) => {
        //handle error here
        console.log('error')
        console.log(err);
    });
}


const runMain = async () => {
    try {
      return await uploadJsonToIPFS();
    //   process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();