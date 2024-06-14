package com.fanta.fixify.token;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.EntityGraph;
import java.util.List;
import java.util.Optional;
public interface TokenRepository extends JpaRepository<Token, Integer> {
    @Transactional(readOnly = true)
    @Query(value = """
            select t from Token t inner join User u\s
            on t.user.id = u.id\s
            where u.id = :id and (t.expired = false or t.revoked = false)\s
            """)
    List<Token> findAllValidTokenByUser(Long id);
    @Query("SELECT new com.fanta.fixify.token.TokenDTO(t.id, t.token, t.tokenType, t.revoked, t.expired, t.user.id) " +
            "FROM Token t WHERE t.token = :token")
    Optional<TokenDTO> findByToken(@Param("token") String token);
}
