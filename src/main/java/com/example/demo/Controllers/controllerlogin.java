package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.Modelslogin;
import com.example.demo.Repository.Repositorylogin;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/hostaa")
public class controllerlogin {
  
	
	 @Autowired
	 Repositorylogin repo1;
	   
	  
	 @PostMapping("/postdata")
	 Modelslogin post(@RequestBody Modelslogin daa) {
		 return repo1.save(daa);
	 }
	

	 }
	 
	
	 
	 

