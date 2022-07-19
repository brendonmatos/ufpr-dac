package com.bantads.clientes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.validation.Valid;
import java.util.List;


@RestController
public class ClientesController {
	private ClientesService clientesService;

	@Autowired
	public ClientesController(ClientesService a){
		this.clientesService = a;
	}

	@PostMapping("/clients")
	public Cliente addClient(@Valid @RequestBody CriarClienteDTO clientRequest){
		Cliente c = new Cliente();
		return clientesService.addCliente(c);
	}

	@GetMapping("/clients")
    public List<Cliente> getAllClients(){
	    return clientesService.getAllClientes();
    }

    @GetMapping("/clients/{id}")
	public Cliente getClient(@PathVariable Integer id){
		return clientesService.getClienteById(id).isPresent() ? clientesService.getClienteById(id).get() : null;
	}
}
