@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CertificateIssueDTO {
  @JsonProperty("certificate_confirmation_number")
  private long certificateConfirmationNumber;

  @JsonProperty("certificate_type_code")
  private String certificateTypeCode;

  @JsonProperty("certificate_issue_date")
  private LocalDate certificateIssueDate;

  @JsonProperty("resident")
  private ResidentSerialDTO residentSerialDTO;
  // Getters and Setters
}
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FamilyMemberCertificateDTO {
  private LocalDate issueDate;
  private Long confirmationNumber;
  private String registrationBaseAddress;
  private List<FamilyMemberDTO> familyMembers;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
  public static class FamilyMemberDTO{
  private String relation;
  private String name;
  @JsonProperty("birth_date")
  @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
  private LocalDateTime birthDate;
  private String residentRegistrationNumber;
  private String gender;

  }
}

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class FamilyRelationshipDTO implements Serializable {
  private FamilyRelationshipPKDTO pk;
  private String familyRelationshipCode;

  @Getter
  @Setter
  @NoArgsConstructor
  @AllArgsConstructor
  @ToString
  public static class FamilyRelationshipPKDTO implements Serializable {
    private int baseResidentSerialNumber;
    private int familyResidentSerialNumber;
  }

}
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HouseholdDTO {
  @JsonProperty("household_serial_number")
  private int householdSerialNumber;

  @JsonProperty("household_resident_serial_number")
  private ResidentSerialDTO householdResidentDTO;

  @JsonProperty("household_composition_date")
  @JsonFormat(pattern="yyyy-MM-dd")
  private LocalDate householdCompositionDate;

  @JsonProperty("household_composition_reason_code")
  private String householdCompositionReasonCode;

  @JsonProperty("current_house_movement_address")
  private String currentHouseMovementAddress;

}

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HouseholdMovementAddressDTO {
  private PKDTO pkDTO;
  @JsonProperty("house_movement_address")
  private String houseMovementAddress;
  @JsonProperty("last_address_yn")
  private String lastAddressYn;
  @JsonProperty("household_serial_number")
  private int householdSerialNumber;

  @Getter
  @Setter
  @NoArgsConstructor
  @AllArgsConstructor
  public static class PKDTO {
    @JsonProperty("household_serial_number")
    private int householdSerialNumber;
    @JsonProperty("house_movement_report_date")
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate houseMovementReportDate;
  }
}

public class KoreanResidentRegistrationDTO {
  private LocalDate issueDate;
  private Long confirmationNumber;
  private LocalDate householdCompositionDate;
  private String householdCompositionReasonCode;
  private List<HouseholdCompositionResidentDTO> householdCompositionResidents;
  private List<HouseholdMovementAddressDTO> householdMovementAddresses;
  @Getter
  @Setter
  @NoArgsConstructor
  @AllArgsConstructor

  public static class HouseholdMovementAddressDTO {

    private Date houseMovementReportDate;

    private String houseMovementAddress;

    private String lastAddressYn;

  }
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

  public static class HouseholdCompositionResidentDTO{
    private String householdRelationCode;
    private String name;
    private String residentRegistrationNumber;
    private LocalDate reportDate;
    private String householdCompositionReasonCode;
  }
}

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ResidentDTO implements Serializable {
  @JsonProperty("resident_serial_number")
  private int residentSerialNumber;

  @JsonProperty("name")
  private String name;

  @JsonProperty("resident_registration_number")
  private String residentRegistrationNumber;

  @JsonProperty("gender_code")
  private String genderCode;

  @JsonProperty("birth_date")
  @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
  private LocalDateTime birthDate;

  @JsonProperty("birth_place_code")
  private String birthPlaceCode;

  @JsonProperty("registration_base_address")
  private String registrationBaseAddress;

  @JsonProperty("death_date")
  @JsonFormat(pattern="yyyy-MM-dd'T'HH:mm:ss")
  private LocalDateTime deathDate;

  @JsonProperty("death_place_code")
  private String deathPlaceCode;

  @JsonProperty("death_place_address")
  private String deathPlaceAddress;
}

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResidentSerialDTO implements Serializable {
private int residentSerialNumber;
}
