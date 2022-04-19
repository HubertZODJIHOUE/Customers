package com.example.customers.repository;

import com.example.customers.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Id;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee , Long> {


    void deleteEmployeeById(Long id);

    Optional<Employee>  findEmployeeById(Long id);
}
