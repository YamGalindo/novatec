package com.bbva.cacd.sendotpvalidationchallengev0.facade.v0.impl;

import com.bbva.cacd.sendotpvalidationchallengev0.DummyMock;
import com.bbva.cacd.sendotpvalidationchallengev0.business.v0.ISendOtpValidationCreateChallengeV0Business;
import com.bbva.cacd.sendotpvalidationchallengev0.business.v0.dto.BDtoInCreateChallengePost;
import com.bbva.cacd.sendotpvalidationchallengev0.business.v0.dto.BDtoOutCreateChallengePost;
import com.bbva.cacd.sendotpvalidationchallengev0.facade.v0.mapper.CreateChallengePostMapper;
import org.junit.*;
import org.mapstruct.factory.Mappers;
import org.mockito.*;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class sendOtpValidationCreateChallengeV0Test {

    @InjectMocks
    private SrvSendOtpValidationAPIChallengeV0 srv;

    private DummyMock dummyMock;

    @Mock
    private  ISendOtpValidationCreateChallengeV0Business sendOtpValidationCreateChallengeV0Business;

    @Mock
    private Mappers mappers;

    @Mock
    private CreateChallengePostMapper mapper;

    @Before
    public void init(){
        dummyMock = new DummyMock();
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void sendOtpValidationCreateChallengeV0(){
        // Mockito.when(mappers.getMapper(Mockito.any(CreateChallengePostMapper.class)))
        //        .thenReturn(mapper);


    }

}
