package com.bantads.clientes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientesServiceImpl implements ClientesService {

	private final ClienteRepository clienteRepository;

	@Autowired
	public ClientesServiceImpl(ClienteRepository clienteRepository) {
		this.clienteRepository = clienteRepository;
	}

	@Override
	public Cliente addCliente(Cliente cliente) {
		return clienteRepository.save(cliente);
	}

	@Override
	public List<Cliente> getAllClientes() {
		return null;
	}

	@Override
	public Optional<Cliente> getClienteById(Integer clienteId) {
		return clienteRepository.findById(clienteId);
	}

}
