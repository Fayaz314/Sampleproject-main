package com.example.demo.Controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Models.modeltext;
import com.example.demo.Repository.repositorytext;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/postdata")
public class controllertext {
	@Autowired
	repositorytext repo;
	@PutMapping("/edit/{id}")
	public String editdata(@PathVariable int id,@RequestBody modeltext da)
	{
		modeltext m=repo.findById(id).get();
		if(m!=null)
		{
			m.setText(da.getText());
			repo.save(m);
			return "Updated";
		}
		else {
			return "Not Updated";
		}
	}
	
	@PostMapping("postdataa")
	modeltext post(@RequestBody modeltext data)
	{
		return repo.save(data);
	}
	@GetMapping("/getpostdata")
	List<modeltext> getdata(){
	return repo.findAll();
    }
	@DeleteMapping("delete/{id}")
	public String deletedaa(@PathVariable int id)
	{
		repo.deleteById(id);
		return "Deleted";
	}
	
	
	

}
