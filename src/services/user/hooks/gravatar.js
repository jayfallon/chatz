'use strict';

// src/services/user/hooks/gravatar.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const crypto = require('crypto');

// the gravatar image service
const gravatarUrl = 'https://s.gravatar.com/avatar';
// the size of the query our chat needs 60px
const query = `s=60`;

// returns a full URL to a gravatar image for a given email address
const gravatarImage = email => {
	// gravatar uses md5 hashes from an email address to get the image
	const hash = crypto.createHash('md5').update(email).digest('hex');

	return `${gravatarUrl}/${hash}?${query}`;
};

module.exports = function(options) {

  return function(hook) {
    hook.data = Obejct.assign({}, hook.data, {
    	avatar: gravatarImage(hook.data.email)
    });
  };
};
